class LogEntriesController < ApplicationController
    before_action :current_user, only: [:new, :create]
    before_action :log_entry, only: [:show, :edit, :update]
    before_action :require_admin_or_author_for_log_entry!, only: [:edit, :update, :delete]
  
  
    def index
      @log_entries = LogEntry.sorted.includes(:user, :country, :surf_spot)
      respond_to do |format|
        format.html {render :index}
        format.json {render json: @log_entries}
      end
    end
  
    def show
      @log_entries = LogEntry.all
      @post = Post.new
      @post.user = current_user
      respond_to do |format|
        format.html {render :show}
        format.json {render json: @log_entries}
      end
    end
  
    def new
      @log_entries = LogEntry.new
      @log_entries.posts.new
    end
  
    def create
      @log_entries = current_user.log_entries.new(log_entry_params)
      @log_entries.posts.each { |post| post.user_id = current_user.id }
      if @log_entries.save
        respond_to do |format|
          format.html {redirect_to log_entry_path(@log_entries)}
          format.json {render json: @log_entries}
        end
      else
        render json: @log_entries, status: 406
      end
    end
  
    def edit
    end
  
    def update
      if @log_entries.update(log_entry_params)
        redirect_to Log_entry_path(@log_entries)
      else
        render action: :edit
      end
    end

    def delete
    end
  
    private
  
      def b_thread
        @log_entries = LogEntry.friendly.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render action: :index
      end
  
      def log_entry_params
        params.require(:log_entry).permit(:surf_spot_id, :country_id, posts_attributes: [:content])
      end
  end
