require 'pry'
class UsersController < ApplicationController
    before_action :user, only: [:show]

    def show
        @log_entries = @user.log_entries.sorted
        render json: @log_entries, include: [
            'user', 'surf_spot.name', 'country.name',
            'posts.user.name', 'posts.log_entry_id']
    end

    def index
        @users = User.all.sorted
        render json: @users
    end
  
    def new
        @user = User.new
        render json: @user
    end
  
    def create
        @user = User.create(user_params)
        if @user.save
            session[:user_id] = @user.id
            render json: @user, status: 200
        else
            render json: {message: @user.errors}, status: 400 
        end
    end
  
    private
        def user
            @user = User.friendly.find(params[:id])
        rescue ActiveRecord::RecordNotFound
            flash[:error] = "Sorry, something went wrong."
            redirect_to root_path 
        end
    
        def user_params
            params.require(:user).permit(:id, :name, :admin, :password, :email)
        end
end
