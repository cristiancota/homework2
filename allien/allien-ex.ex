x = File.read! "A-small-practice.in"
linesList = String.split(x, "\n")
head = hd(linesList)
[a,b,c] = String.split(head, ~r{\s}, trim: true)

linesListNoHead = List.delete_at(linesList,0)

{totalTokens, _} = :string.to_integer(to_char_list(b))
{totalCases, _} = :string.to_integer(to_char_list(c))

tokens = Enum.take(linesListNoHead, totalTokens)
cases = Enum.slice(linesListNoHead, totalTokens, totalTokens+1+totalCases)

regex = Enum.map(cases, fn(x) -> 
	String.replace(x, ~r/\(/,"[") 
end)

regex = Enum.map(regex, fn(x) -> 
	String.replace(x, ~r/\)/,"]") 
end)

IO.puts regex