class Api::DepartmentsController < ApplicationController

   def index
    render json: Department.all
  end

  def show

  end

  def create
    department = Department.new(department_params)
    if department.save
      render json: department
    else
      render json: {errors: department.errors}, status: :unprocessable_entitiy
    end
  end

  def update
    department = Department.find(params[:id])
    department.update
    render json: department
  end

  def destroy
    dep = Department.find(params[:id])
    dep.destroy
    render json: Department.all
  end

  private
  
  def department_params
    params.require(:department).permit(:name)
  end

end
