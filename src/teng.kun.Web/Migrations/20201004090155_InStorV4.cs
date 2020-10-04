using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class InStorV4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ReconciliationRemark",
                table: "InStorManager_InStor",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "SupTicketRemark",
                table: "InStorManager_InStor",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReconciliationRemark",
                table: "InStorManager_InStor");

            migrationBuilder.DropColumn(
                name: "SupTicketRemark",
                table: "InStorManager_InStor");
        }
    }
}
