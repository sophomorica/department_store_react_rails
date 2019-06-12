8.times do
  department = Department.create(
    name: Faker::Commerce.department,
  )
  3.times do 
     
    Item.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price.to_f,
      department_id: department.id
    )
  end
end

puts "3 departments and Nine items  Seeded"