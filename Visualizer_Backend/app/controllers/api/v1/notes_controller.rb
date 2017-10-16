class Api::V1::NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes
  end

  def create
    @note = Note.new(title: params["note"]["title"], doc: params["note"]["text"], user_id: params["user"])
    @category = Category.find_by(name: params["note"]["category"])
    @category.notes << @note
    if @note.save!
      render json: @note
    end
  end

  def show
    @note = Note.find(params[:id])
    render json: @note
  end

end
