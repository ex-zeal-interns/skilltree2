class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :first_name, :last_name, :time_zone, :privacy_status, :mentor_status, :unique_url] )
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :first_name, :last_name, :time_zone, :privacy_status, :mentor_status, :unique_url] )
  end
end
