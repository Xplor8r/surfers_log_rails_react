class PostsController < ApplicationController
    before_action :current_user
    before_action :log_entry
    before_action :post, only: [:edit, :update, :destroy, :show]
    before_action :require_admin_or_author_for_post!, only: [:edit, :update]
  
    def index
        render json: @log_entry.posts
    end
    
    def Show
        render json: @post
    end

    def create
        @post = LogEntry.posts.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            render json: @post, status: 200
        else
            render json: {message: @post.errors}, status: 400 
        end
    end

    def update
        @post.update(post_params)
        head :no_content
    end

    def destroy
        @post.destroy
        head :no_content
    end
  
    private
  
        def log_entry
            @log_entry = LogEntry.friendly.find(params[:log_entry_id])
        rescue ActiveRecord::RecordNotFound
            redirect_to root_path 
        end
    
        def post
            if is_admin?
                @post = log_entry.posts.find(params[:id])
            else
                @post = current_user.posts.find(params[:id])
            end
        end
    
        def post_params
            params.require(:post).permit(:content, :user_id, :log_entry_id)
        end
end
