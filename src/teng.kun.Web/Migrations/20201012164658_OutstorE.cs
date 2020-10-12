using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class OutstorE : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OutstorOther",
                table: "OutStorManager_OutStor",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OutstorPrintName",
                table: "OutStorManager_OutStor",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OutstorOther",
                table: "OutStorManager_OutStor");

            migrationBuilder.DropColumn(
                name: "OutstorPrintName",
                table: "OutStorManager_OutStor");
        }
    }
}
