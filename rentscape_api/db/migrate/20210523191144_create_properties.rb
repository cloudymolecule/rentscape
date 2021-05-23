class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :address_2
      t.string :township
      t.string :state
      t.string :review_title
      t.string :review
      t.string :overall_rating
      t.string :landlord_rating
      t.string :cleanliness_rating
      t.string :neighbors_rating
      t.string :price_rating

      t.timestamps
    end
  end
end
