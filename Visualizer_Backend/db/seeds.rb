#Create Dummy Users
luke = User.create({username: "luke", password: "a"})
dean = User.create({username: "dean", password: "a"})
roman = User.create({username: "roman", password: "a"})

#Instantiate the types of Categories
categories = ["History", "Science", "Math", "Law", "Religion", "Languages", "Art", "Computer Science", "Finance", "Accounting", "Music", "Engineering", "Education", "Other"]
history = Category.create({name: categories[0]})
science = Category.create({name: categories[1]})
math = Category.create({name: categories[2]})
law = Category.create({name: categories[3]})
religion = Category.create({name: categories[4]})
lang = Category.create({name: categories[5]})
art = Category.create({name: categories[6]})
cs = Category.create({name: categories[7] })
finance = Category.create({name: categories[8] })
acct = Category.create({name: categories[9]})
music = Category.create({name: categories[10]})
engineering = Category.create({name: categories[11]})
edu = Category.create({name: categories[12]})
other = Category.create({name: categories[13]})

#Create dummy notes
chemNote = Note.create({title: 'Chemistry Note', doc: 'Periodic table of elements, hydrogen, oxygen, helium, methane. Kennny is the greatest doctor in the world. He told me I sound sick so I shoudl drink some water'})
histNote = Note.create({title: 'History Note', doc: 'The declaration of indepence was signed in 1776. In 2030 Guy Fieri annexed Cuba and renamed Havana Flavortown'})
mathNote = Note.create({title: 'Math Note', doc: 'Derivatives are extremely confusing and I hate them. Good thing there are sites like khan academy to study from . E = MC^2'})

#Make dummy users have some notes
luke.notes << chemNote
roman.notes << histNote
dean.notes << mathNote

#Associate Notes with a category
chemNote.category = science
histNote.category = history
mathNote.category = math
