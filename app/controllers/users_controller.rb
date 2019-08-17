require 'pry'
class UsersController < ApplicationController
    before_action :user, only: [:show, :log_entries]

    def log_entries
        @log_entries = LogEntry.where(user: @user).sorted.includes(:user, :country, :surf_spot)
        render json: @log_entries, include: ['user', 'surf_spot.name', 'country.name', 'posts.user.name', 'posts.log_entry_id']
    end

    def show
        # binding.pry
        render json: @user, include: ['log_entries.user', 'log_entries.surf_spot', 'log_entries.country', 'log_entries.posts']
    end

    def index
        @users = User.all
        render json: @users
    end
  
    def new
        @user = User.new
        render json: @user
    end
  
    def create
        @user = User.create(user_params)
        @user.user_id = current_user.id
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
            params.require(:user).permit(:name, :admin, :password, :email)
        end
end
