import random

game_state =["Win", "Loss", "Draw"]
computer_options = [0, 1, 2]
computer_choice = random.choice(computer_options)

# Computer Choices
if computer_choice == 0:
    computer_choice = "Rock"

if computer_choice == 1:
    computer_choice = "Paper"

if computer_choice == 2:
    computer_choice = "Scissors"

# User Choices
user_options = ["Rock", "Paper", "Scissors"]

user_input = input(
    "Please select one of the following: Rock, Paper, or Scissors. ")
print(user_input)

# Game Logic
if user_input == "Rock":
    if computer_choice == "Rock":
        game_state = "Draw"
print(game_state)
if computer_choice == "Paper":
    game_state = "Loss"
print(game_state)
if computer_choice == "Scissors":
    game_state = "Win"
print(game_state)

if user_input == "Paper":
    if computer_choice == "Rock":
        game_state = "Win"
print(game_state)
if computer_choice == "Paper":
    game_state = "Draw"
print(game_state)
if computer_choice == "Scissors":
    game_state = "Loss"
print(game_state)

if user_input == "Scissors":
    if computer_choice == "Rock":
        game_state = "Loss"
print(game_state)
if computer_choice == "Paper":
    game_state = "Win"
print(game_state)
if computer_choice == "Scissors":
    game_state = "Draw"
print(game_state)