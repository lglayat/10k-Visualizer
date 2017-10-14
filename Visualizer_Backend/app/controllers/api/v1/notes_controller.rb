class Api::V1::NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes
  end

  def create
    binding.pry
    @note = Note.create(doc: params["note"])
    @user = User.find(params[:user])
    @user.notes << @note
    render json: @note
  end

  def show
    @note = Note.find(params[:id])
    render json: @note
  end

end
