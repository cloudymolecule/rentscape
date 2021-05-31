class Property < ApplicationRecord
    has_one_attached :image_url
    has_secure_password

    validate :add_default_image_url, on: :create

    validates :password, confirmation: true, length: {within: 6..20}, on: :create

    validates :address, :township, :state, :review_title, :review, :overall_rating, :landlord_rating, :cleanliness_rating, :neighbors_rating, :price_rating, presence: true
end

private 

def add_default_image_url
    unless image_url.attached?
      self.image_url.attach(io: File.open(Rails.root.join("app", "assets", "images", "defaultProperty.png")), filename: 'defaultProperty.png' , content_type: "image/png")
    end
end


