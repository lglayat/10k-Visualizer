class Api::V1::UsersController < ApplicationController

  skip_before_action :authorized, only: [:create, :show]
  # I AM CREATING A User
  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.save
      token = encode_token({ user_id: user.id})
      render json: {user: user, jwt: token}
    else
    end
  end

  def index
    @users = User.all
    render file: "/Users/mac/Desktop/Development/Projects/10-k_wizard/Visualizer_Backend/db/doc2.docx"
  end

  # Profile Page
  def show
  	@user = User.find_by(id: params[:id])
    if @user
      render json:  @user
    else
      render json: { message: "Error"}
    end
  end


end
