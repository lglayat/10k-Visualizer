class Api::V1::NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes
  end

  def create
    binding.pry
    @note = Note.new()
  end

end
