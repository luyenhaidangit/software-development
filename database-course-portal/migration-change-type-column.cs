//Delete

using Microsoft.EntityFrameworkCore.Migrations;

namespace UTEHY.DatabaseCoursePortal.Api.Data.EntityFrameworkCore.Migrations
{
    public partial class RemoveIntFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "QuestionCategories");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "QuestionCategories");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "QuestionCategories");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CreatedBy",
                table: "QuestionCategories",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UpdatedBy",
                table: "QuestionCategories",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DeletedBy",
                table: "QuestionCategories",
                nullable: true);
        }
    }
}

//Add
using Microsoft.EntityFrameworkCore.Migrations;

namespace UTEHY.DatabaseCoursePortal.Api.Data.EntityFrameworkCore.Migrations
{
    public partial class RemoveIntFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "QuestionCategories");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "QuestionCategories");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "QuestionCategories");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CreatedBy",
                table: "QuestionCategories",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UpdatedBy",
                table: "QuestionCategories",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DeletedBy",
                table: "QuestionCategories",
                nullable: true);
        }
    }
}

