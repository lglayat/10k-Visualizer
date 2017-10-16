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
chemNote = Note.create({title: 'Chemistry Note', doc: 'Chemical reactions involve the making and breaking of bonds. It is essential that we know what bonds are before we can understand any chemical reaction. To understand bonds, we will first describe several of their properties. The bond strength tells us how hard it is to break a bond. Bond lengths give us valuable structural information about the positions of the atomic nuclei. Bond dipoles inform us about the electron distribution around the two bonded atoms. From bond dipoles we may derive electronegativity data useful for predicting the bond dipoles of bonds that may have never been made before.
From these properties of bonds we will see that there are two fundamental types of bonds--covalent and ionic. Covalent bonding represents a situation of about equal sharing of the electrons between nuclei in the bond. Covalent bonds are formed between atoms of approximately equal electronegativity. Because each atom has near equal pull for the electrons in the bond, the electrons are not completely transferred from one atom to another. '})
histNote = Note.create({title: 'History Note', doc: 'Marcus Aurelius assumed the throne according to a previously agreed upon succession, at a time of relative peace and prosperity for Rome. Though native to Rome, his family was of Iberian (Spanish) origin; Aurelius himself was a Stoic, and given to deep philosophical thought. With his rise to power, continued security for both the Roman state and society seemed likely. His entire rule, however, was occupied by challenges that would characterize Roman dilemmas for the next two-and-a-half centuries.
Aurelius first year as emperor (a rule shared with his adopted half-brother Lucius Verus until 169) was appropriate to his mindset of Stoicism. In 161, the Tiber River flooded, the Chatti raided, legions revolted in Britain, and the Parthians of Persia attacked, as they were unsatisfied with disadvantageous borders instituted during the reign of Emperor Hadrian (130s CE).'})

mathNote = Note.create({title: 'Math Note', doc: 'This formula is sometimes called the power rule.  All we are doing here is bringing the original exponent down in front and multiplying and then subtracting one from the original exponent.
Note as well that in order to use this formula n must be a number, it can’t be a variable.  Also note that the base, the x, must be a variable, it can’t be a number.  It will be tempting in some later sections to misuse the Power Rule when we run in some functions where the exponent isn’t a number and/or the base isn’t a variable.
See the Proof of Various Derivative Formulas section of the Extras chapter to see the proof of this formula.  There are actually three different proofs in this section.  The first two restrict the formula to n being an integer because at this point that is all that we can do at this point.  The third proof is for the general rule, but does suppose that you’ve read most of this chapter.'})

#Make dummy users have some notes
luke.notes << chemNote
roman.notes << histNote
dean.notes << mathNote

#Associate Notes with a category
science.notes << chemNote
history.notes << histNote
math.notes << mathNote
