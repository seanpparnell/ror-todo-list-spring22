List.create(
  title: 'Grocery', 
  desc: 'food for the week'
)
List.create(
  title: 'Office', 
  desc: 'office supplies'
)
List.create(
  title: 'Bunker', 
  desc: 'Meal preps and MREs'
)

puts "Number of lists: #{List.all.count}"