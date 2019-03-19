class SurfSpotsController < ApplicationController
    before_action :surf_spot
    before_action :current_user
    
    def index
      @log_entries = LogEntry.where(surf_spot: @surf_spot) if @surf_spot.present?
      @log_entries = @log_entries.sorted.includes(:user, :surf_spot)
      render "log_entries/index"
    end
 
    private
      def surf_spot
        @surf_spot = SurfSpot.friendly.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        flash[:error] = "Sorry, something went wrong."
        redirect_to root_path
end
