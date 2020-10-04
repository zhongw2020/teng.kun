using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class daotui : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MatName",
                table: "InStorManager_InStor");

            migrationBuilder.DropColumn(
                name: "SupName",
                table: "InStorManager_InStor");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "MatName",
                table: "InStorManager_InStor",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SupName",
                table: "InStorManager_InStor",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
