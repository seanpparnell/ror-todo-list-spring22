Todo.delete_all
List.delete_all 

5.times do 
  list = List.create(
    title: Faker::Kpop.boy_bands,
    desc: Faker::Lorem.paragraph
  )
  3.times do
    todo = Todo.create(
      title: Faker::Cannabis.strain,
      complete: Faker::Boolean.boolean,
      list_id: list.id
    )
  end 
end

puts "Number of lists: #{List.all.count}"
List.all.each do |list|  
  puts "#{list.id}, title: #{list.title} desc: #{list.desc}"
end

puts "Number of todo: #{Todo.all.count}"
Todo.all.each do |todo|  
  puts "#{todo.id}, title: #{todo.title} complete: #{todo.complete}"
end