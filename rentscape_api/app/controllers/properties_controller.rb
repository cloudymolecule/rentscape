class PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :update, :destroy]

  def index
    @properties = Property.all
    render json: @properties
  end

  def show
    render json: @property
  end

  def create
    @property = Property.new(property_params)
    if @property.save
      render json: @property, status: :created, location: @property
    else
      # render json: @property.errors, status: :unprocessable_entity
      render json: {errors: @property.errors.full_messages}
    end
  end

  def destroy
    @property.destroy
  end

  private
    def set_property
      @property = Property.find(params[:id])
    end

    def property_params
      params.permit(:address, :address_2, :township, :state, :review_title, :review, :overall_rating, :landlord_rating, :cleanliness_rating, :neighbors_rating, :price_rating, :image_url, :password, :password_confirmation)
    end
end
