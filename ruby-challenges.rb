# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# reposts1 = 7
# Expected output: '7 is odd'
# reposts2 = 42
# Expected output: '42 is even'
# reposts3 = 221
# Expected output: '221 is odd'

# reposts1 = 7
# def even_odd (reposts1)
#     if reposts1 % 2 == 0
#             puts "#{reposts1} is even"
#         else 
#             puts "#{reposts1} is odd"
#     end
# end

# puts even_odd(7)  // 7 is odd
# puts even_odd(42) // 42 is even
# puts even_odd(221) // 221 is odd

# Pseudo code:


# Define the method

# Declare a parameter to take in a number

# Check or Evaluate if the number is divisible by 2

# Return "even" if the number is divisible by 2

# Return "odd" if the number is not divisible by 2

# Use the given test variables to test the method

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# beatles_album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
# beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

# def beatles_album3(string)
#     string.delete("aeiouAEIOU")
# end

# puts beatles_album1 "Rubber Soul" // Rbbr Sl
# puts beatles_album2 "Sgt Pepper" // Sgt Pppr
# puts beatles_album3 "Abbey Road" // bby Rd

# Pseudo code:

# Create a method

# Take in a string as input

# Remove all vowels from the string using string.delete

# Use the provided test variables

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_test_case3(palindrome_test_case3)
    if palindrome_test_case3.downcase == palindrome_test_case3.downcase.reverse
        puts "#{palindrome_test_case3} is a palindrome"
    else
        puts "#{palindrome_test_case3} is not a palindrome"
    end
end

# puts palindrome_test_case1 "Racecar" //Racecar is a palindrome
# puts palindrome_test_case2 "LEARN" // LEARN is not a palindrome
# puts palindrome_test_case3 "Rotator" // Rotator is a palindrome

# Pseudo code:

# Define a new method  that takes in a string as a parameter.

# Convert the string to lowercase using .downcase to ensure case insensitivity. 

# Compare the original to its reverse. Reverse the string using .reverse. 

# Evaluate/check if the reversed string is equal to the original string.

# If they are equal, return "String is a palindrome"; otherwise, return "String is not a palindrome".

# Test the method using the provided test variables.