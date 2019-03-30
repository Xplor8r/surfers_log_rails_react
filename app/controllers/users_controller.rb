class UsersController < ApplicationController
    before_action :user, only: [:show, :states]

    def show
        @log_entries = LogEntry.where(user: @user).sorted.includes(:user, :country, :surf_spot)
        respond_to do |format|
            format.html {render :show}
            format.json {render json: @user}
        end
    end
  
    def states
    end
  
    def index
        render "log_entries/index"
    end
  
    def new
        @user = User.new
    end
  
    def create
        @user = User.create(user_params)
        if @user.save
            session[:user_id] = @user.id
            redirect_to user_path(@user)
        else
            flash[:error] = "You must give a valid name, email and password."
            redirect_to new_user_path
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
