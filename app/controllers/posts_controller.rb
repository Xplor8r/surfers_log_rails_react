class PostsController < ApplicationController
    before_action :current_user
    before_action :Log_entry
    before_action :post, only: [:edit, :update]
    before_action :require_admin_or_author_for_post!, only: [:edit, :update]
  
    def index
        render json: @Log_entry
    end
  
    def create
        @post = @Log_entry.posts.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            respond_to do |format|
            format.html {redirect_to log_entry_path(@Log_entry, anchor: "post_#{@post.id}")}
            format.json {render json: @post}
            end
        else
            render template: "log_entrys/show"
        end
    end
  
    def edit
    end
  
    def update
        if @post.update(post_params)
            redirect_to log_entry_path(@Log_entry)
        else
            render action: :edit
        end
    end
  
    private
  
        def Log_entry
            @Log_entry = LogEntry.friendly.find(params[:log_entry_id])
        rescue ActiveRecord::RecordNotFound
            flash[:error] = "Sorry, something went wrong."
            redirect_to root_path 
        end
    
        def post
            if is_admin?
                @post = @Log_entry.posts.find(params[:id])
            else
                @post = current_user.posts.find(params[:id])
            end
        end
    
        def post_params
            params.require(:post).permit(:content, :user_id, :log_entry_id)
        end
end
