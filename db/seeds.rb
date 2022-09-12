
categories = %w(excercise education recipe)
categories.each do |cat|
  VideoCategory.where(slug: cat, name: cat.capitalize).first_or_create
end