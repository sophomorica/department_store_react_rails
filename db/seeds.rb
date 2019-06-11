3.times do
  Department.create(
    name: Faker::Commerce.department,
  )
  3.times do 
    dep_id = 
    Item.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price.to_f,
      department_id: dep_id
    )
  end
end

puts "100 Products Seeded"