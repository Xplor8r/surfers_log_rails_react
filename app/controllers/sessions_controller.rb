class SessionsController < ApplicationController
    def new
        @user = User.new
    end
  
    def create
      @user = User.find_by(email: params[:user][:email])
        if @user && @user.authenticate(params[:user][:password])
          session[:user_id] = @user.id
          render json: @user
        else
          flash[:error] = "Sorry, that email and password doesn't match our records. Please sign up."
          redirect_to new_user_url
        end
    end
    
    def destroy
      session[:user_id] = nil
      redirect_to root_path
    end    
end
