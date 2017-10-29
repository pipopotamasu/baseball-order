class MembersController < ApplicationController
  # def create
  #   render json: Todo.create(todo_params)
  # end
  # 
  # def destroy
  #   Todo.find(params[:id]).destroy
  #   render json: :deleted
  # end

  def all
    render json: Member.all
  end

  private

  def todo_params
    params.require(:member).permit(:name, :order)
  end
end
