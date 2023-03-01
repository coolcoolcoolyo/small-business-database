class SubcontractorController < ApplicationController

    # skip_before_action :authenticated_user

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        subcontractors = Subcontractor.all
        render json: subcontractors, status: :ok
    end

    def show
        subcontractor = Subcontractor.find(params[:id])
        render json: subcontractor, status: :ok
    end

    def create
        new_sub = Subcontractor.create!(sub_params)
        render json: new_sub, status: :created
    end

    def update
        update_sub = Subcontractor.find(params[:id]).update!
        render json: update_sub, status: :accepted
    end

    def destroy
        delete_sub = Subcontractor.find(params[:id]).destroy!
        render json: delete_sub
        head :no_content
    end

    private

    def sub_params
        params_permit(:company_legal_name, :company_dba, :primary_poc_name, :poc_role, :poc_phone, :poc_email, :tax_number, :skill_id, :active?, :notes)
    end

    def not_found
        render json: { error: "Subcontractor not found"}, status: :not_found
    end

end
