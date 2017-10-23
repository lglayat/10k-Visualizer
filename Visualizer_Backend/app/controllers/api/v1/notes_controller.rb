class Api::V1::NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes
  end

  def create
    @note = Note.new(title: params["note"]["title"], doc: params["note"]["text"], count: 1)
    @category = Category.find_by(name: params["note"]["category"])
    @user = User.find(params[:user])
    @user.notes << @note
    if @note.save!
      @category.notes << @note
      render json: @note
    end
  end

  def show
    @note = Note.find(params[:id])
    render json: @note
  end

  def search
    @arr = []

		Note.all.each do |n|
			if n.title.downcase.include?(params["value"].downcase)
				@arr << n
			end
		end


    render json: @arr
  end

  def buyNote
    @note = Note.find(params[:note])
    @user = User.find(params[:user])
    if @user.notes.include?(@note) === true
      render json: {status:false}
    else
      @note.count = @note.count + 1
      @user.notes << @note
      render json: {status:true}
    end
  end

end
