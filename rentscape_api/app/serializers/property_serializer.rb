class PropertySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :address, :address_2, :township, :state, :review_title, :review, :overall_rating, :landlord_rating, :cleanliness_rating, :neighbors_rating, :price_rating, :image_url

  def image_url
    if object.image_url.attached?
      { url: rails_blob_url(object.image_url) }
    end
  end

end
