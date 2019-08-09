class V1::MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @movies = Movie.all
    render json: @movies
  end

  def new
    @movie = Movie.new
  end

  def create
    @movie = Movie.new(movies_params)
    if @movie.save
      render json: @movie, status: 201
    else
      render json: { errors: @movie.errors }, status: 422
    end
  end

  def update
    if @movie.update(movies_params)
      render json: @movie, status: 200
    else
      resder json: { errors: @movie.erros }, status: 422
    end
  end

  def destroy
    @movie.destroy
    render json: @movies, status: 204
  end

  def movies_params
    params.require(:movie).permit(:name, :description, :image_url, :initial_date, :finish_date)
  end

  def set_movie
    @movie = Movie.find(params[:id])
  end
end
