class V1::ReservationsController < ApplicationController
  before_action :set_reservtaion, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def index
    @reservations = Reservation.all
    render json: @reservations
  end

  def new
    @reservation = Reservation.new
  end

  def create
    counter = Reservation.where(movie_id: reservations_params[:movie_id]).count
    if counter <= 10
      @reservation = Reservation.new(reservations_params)
      if @reservation.save
        render json: @reservation, status: 201
      else
        render json: { errors: @reservation.errors }, status: 422
      end
    else
      format.json { render json: [{"error": "Reservas Llenas"}], status: :unprocessable_entity }
    end
  end

  def update
    if @reservation.update(reservations_params)
      render json: @reservation, status: 200
    else
      resder json: { errors: @reservation.erros }, status: 422
    end
  end

  def destroy
    @reservation.destroy
    render json: @reservations, status: 204
  end

  def reservations_params
    params.require(:reservation).permit(:name, :phone, :identification_card, :email, :movie_id)
  end

  def set_reservtaion
    @reservation = Reservation.find(params[:id])
  end
end
