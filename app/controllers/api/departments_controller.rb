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
    render json: item
  end

  def destroy
    Department.find(params[:id]).destroy
    render json: { message: 'department Deleted'}
  end

  private
  
  def department_params
    params.require(:department).permit(:name)
  end

end
