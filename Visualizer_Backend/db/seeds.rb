# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

luke = User.create({username: "luke", password: "a"})
dean = User.create({username: "dean", password: "a"})

pdf2 =  IO.binread('/Users/mac/Desktop/Development/Projects/10-k_wizard/Visualizer_Backend/db/docs/doc1.pdf')
# word2 = IO.binread('/Users/mac/Desktop/Development/Projects/10-k_wizard/Visualizer_Backend/db/doc2.docx')
# txt2 = IO.binread('/Users/mac/Desktop/Development/Projects/10-k_wizard/Visualizer_Backend/db/doc3.txt')


Bob.create({data: pdf2})

ex1 = Note.create({title: 'Chemistry Ex', doc: 'Periodic table of elements, hydrogen, oxygen, helium, methane.'})
ex2 = Note.create({title: 'History Ex', doc: 'The declaration of indepence was signed in 1776'})
ex3 = Note.create({title: 'Math Ex', doc: 'Derivatives are extremely confusing and I hate them'})
luke.notes << ex1
luke.notes << ex2
dean.notes << ex3
