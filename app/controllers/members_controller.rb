class MembersController < ApplicationController
  def create
    render json: Member.create(member_params)
  end

  def destroy
    # TODO: require refactoring
    Member.find(params[:id]).destroy
    Member.all.each_with_index do |member, i|
      Member.find(member.id).update(order: i)
    end
    render json: :deleted
  end

  def all
    render json: Member.all
  end

  private

  def member_params
    params.require(:member).permit(:name, :order)
  end
end
