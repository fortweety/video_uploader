class Api::VideoCategoriesController < ApplicationController
  def list
    render json: VideoCategory.all
  end
end