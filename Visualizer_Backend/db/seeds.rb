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
religionNote = Note.create({title: 'Mormonism Beliefs', doc: 'The Church of Jesus Christ of Latter-day Saints is the fourth largest Christian church in America. More than half of its members live outside the United States. Yet despite the faith’s growth and presence, survey results continue to show that relatively few people are familiar with Mormon beliefs.
As an institution, the Church has the responsibility to publicly and clearly articulate its official teachings. In turn, reporters can help inform the public by accurately reporting on these doctrines. But in doing so journalists should be aware of some common pitfalls. For instance, reporters pressed for time tend to take peripheral aspects of the faith and place them front and center as if they were vital tenets of belief. Additionally, sincere commentators often overemphasize what others see as “different” about Latter-day Saints at the expense of highlighting the Church’s most fundamental doctrines in their reporting. Unfortunately, as many members attest, this kind of journalism paints a distorted picture of the Church and continues to confuse the public.'})
artNote = Note.create({title: 'Watercolor Basics', doc: '1. USE A PORTABLE SET OF PAN PAINTS.
Watercolor paint comes in three different forms: liquid, tube, and pan. You can start with any kind, but sets of pan paints are compact, portable, and offer an array of easily accessible colors. You might try the WInsor & Newton Cotman Watercolor Pocket PLUS Set of 24 Half Pans, which comes with a No. 3 size brush, for a nice variety of quality paints at a reasonable price.

2. USE JUST 3 OR 4 GOOD BRUSHES AND TAKE CARE OF THEM.
Watercolor brushes typically have soft, long hairs made specifically to move a watery medium around. The best ones are from natural fiber such as sable or squirrel, but these are scarce and expensive, so good quality soft synthetic brushes have been developed that are much less expensive. You need to experiment to determine what shapes and sizes you like, for ultimately it is a personal preference.

Although there are a number of different shapes and sizes of brushes, you should really only need one or two larger flat brushes for laying a wash and several different round brushes of different sizes for details. For example, a #12 round, #10 round, #6 round, and a couple flat brushes 1" or thereabouts. (20 mm equals about 1 inch).'})
lawNote = Note.create({title: 'First Amendment', doc: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.'})
financeNote = Note.create({title: 'What are ETFs', doc: 'Exchange-traded funds are one of the most important and valuable products created for individual investors in recent years. ETFs offer many benefits and, if used wisely, are an excellent vehicle to achieve an investor’s investment goals.
Briefly, an ETF is a basket of securities that you can buy or sell through a brokerage firm on a stock exchange. ETFs are offered on virtually every conceivable asset class from traditional investments to so-called alternative assets like commodities or currencies. In addition, innovative ETF structures allow investors to short markets, to gain leverage, and to avoid short-term capital gains taxes.
After a couple of false starts, ETFs began in earnest in 1993 with the product commonly known by its ticker symbol, SPY, or “Spiders,” which became the highest volume ETF in history. There are now estimated to be over $1 trillion invested in ETFs and nearly 1,000 ETF products traded on U.S. stock exchanges.'})
engineeringNote = Note.create({title: 'Types of Cement', doc: 'Characteristics
Used for general purpose

Available widely

Used where concrete is not subjected to specific exposures such as sulphate attacks from soil or water or to an objectionable temperature rise due to heat of hydration

Suitable for all uses e.g pavement, sidewalk, R.C buildings, bridges, water tanks, culverts, sewers etc.
This type of cement reaches its design strength in 28 days.
Contents
MgO is less than 0.6 %

Insolouble residue is less than 0.75 %

Loss on ignition is less than 3%

Insolouble residue

It is determined by treatment with HCl. It is due to impurities in Gypsum.
'})

#Make dummy users have some notes
luke.notes << chemNote
luke.notes << financeNote
luke.notes << engineeringNote
luke.notes << religionNote
luke.notes << artNote
luke.notes << lawNote
roman.notes << histNote
dean.notes << mathNote

#Associate Notes with a category
science.notes << chemNote
history.notes << histNote
math.notes << mathNote
religion.notes << religionNote
art.notes << artNote
finance.notes << financeNote
engineering.notes << engineeringNote
law.notes << lawNote
