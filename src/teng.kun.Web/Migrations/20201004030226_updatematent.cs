using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class updatematent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MatParameter",
                table: "BaseModule_MatBasedata");

            migrationBuilder.AddColumn<string>(
                name: "MatAlias01",
                table: "BaseModule_MatBasedata",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatAlias02",
                table: "BaseModule_MatBasedata",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatAlias03",
                table: "BaseModule_MatBasedata",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatAlias04",
                table: "BaseModule_MatBasedata",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatAlias05",
                table: "BaseModule_MatBasedata",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MatAlias01",
                table: "BaseModule_MatBasedata");

            migrationBuilder.DropColumn(
                name: "MatAlias02",
                table: "BaseModule_MatBasedata");

            migrationBuilder.DropColumn(
                name: "MatAlias03",
                table: "BaseModule_MatBasedata");

            migrationBuilder.DropColumn(
                name: "MatAlias04",
                table: "BaseModule_MatBasedata");

            migrationBuilder.DropColumn(
                name: "MatAlias05",
                table: "BaseModule_MatBasedata");

            migrationBuilder.AddColumn<string>(
                name: "MatParameter",
                table: "BaseModule_MatBasedata",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
