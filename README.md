Solution
Overview
In a lot of countries, Roman Numerals are taught in elementary school-level math. This has made them a somewhat popular "easy" interview question. Unfortunately though, this ignores the fact that not everybody learned them in school, and therefore a big advantage has been given to those who did. I suspect it's also difficult for a lot of us who have learned them previously to fully appreciate how much easier prior experience makes this question. While this is very unfair, and possibly very frustrating, keep in mind that the best thing you can do is work through this question and the related question Integer to Roman so that you don't get caught out by it in a real interview.

Can we assume the input is valid?

Yes. Here on Leetcode, you can make that assumption because you haven't been told what to do if it isn't.

In a real interview, this is a question you should ask the interviewer. Don't ever assume without asking in a real interview that the input has to be valid.

Is there only one valid representation for each number?

This is more relevant to the other question, Integer to Roman, however we'll still briefly look at it now.

Given that the representation for 3 is III, it could seem natural that the representation for 15 is VVV, because that would be 5 + 5 + 5. However, it's actually XV, which is 10 + 5. How are you even supposed to know which is correct?

The trick is to use the "biggest" symbols you can. Because X is bigger than V, we should use an X first and then make up the remainder with a single V, giving XV.

We'll talk more about this in the Integer to Roman article. This question is a lot simpler because there's only one logical way of converting from a Roman Numeral to an Integer. This is also why this question is labelled as "easy", whereas the other is labelled as "medium".

A few more examples

If you're not very familiar with Roman Numerals, work through these examples and then have another go at writing your own algorithm before reading the rest of this solution article.

What is CXVII as an integer?

Recall that C = 100, X = 10, V = 5, and I = 1. Because the symbols are ordered from most significant to least, we can simply add the symbols, i.e. C + X + V + I + I = 100 + 10 + 5 + 1 + 1 = 117.

What is DXCI as an integer?

Recall that D = 500.

Now, notice that this time the symbols are not ordered from most significant to least—the X and C are out of numeric order. Because of this, we subtract the value of X (10) from the value of C (100) to get 90.

So, going from left to right, we have D + (C - X) + I = 500 + 90 + 1 = 591.

What is CMXCIV as an integer?

Recall that M = 1000.

The symbols barely look sorted at all here—from left-to-right we have 100, 1000, 10, 100, 1, 5. Do not panic though, we just need to look for each occurrence of a smaller symbols preceding a bigger symbol. The first, third, and fifth symbols are all smaller than their next symbol. Therefore they are all going to be subtracted from their next.

The first two symbols are CM. This is M - C = 1000 - 100 = 900
The second two symbols are XC. This is C - X = 100 - 10 = 90.
The final two symbols are IV. This is V - I = 5 - 1 = 4.
Like we did above, we add these together. (M - C) + (C - X) + (V - I) = 900 + 90 + 4 = 994.
