class Property < ApplicationRecord
    has_one_attached :image_url
    has_secure_password
end
