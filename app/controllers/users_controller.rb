class UsersController < ApplicationController

  def logged_in_user
    if current_user
      render json: current_user
    else
      render json: {}, :status => 404
    end
  end
end
