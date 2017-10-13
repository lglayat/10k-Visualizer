class Api::V1::BobsController < ApplicationController

  	def index
      @bob = Bob.first
      render json: {bob: @bob}
    end
end
