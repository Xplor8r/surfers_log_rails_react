class CountriesController < ApplicationController
    before_action :country, only: [:index]
    before_action :current_user
    
    def index
      @log_entries = LogEntry.where(country: @country) if @country.present?
      @log_entries = @log_entries.sorted.includes(:user, :country)
      render json: @log_entries, include: ['user', 'surf_spot.name', 'country.name', 'posts.user.name', 'posts.log_entry_id']
    end

    def list
      @list = Country.all
      render json: @list
    end
 
    private
      def country
        @country = Country.friendly.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        flash[:error] = "Sorry, something went wrong."
        redirect_to root_path
      end
end
