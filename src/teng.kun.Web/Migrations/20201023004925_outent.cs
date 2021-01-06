using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class outent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CDOutstorVoucher",
                table: "OutStorManager_OutStor",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OutstorCategory",
                table: "OutStorManager_OutStor",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OutstorToIn",
                table: "OutStorManager_OutStor",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CDOutstorVoucher",
                table: "OutStorManager_OutStor");

            migrationBuilder.DropColumn(
                name: "OutstorCategory",
                table: "OutStorManager_OutStor");

            migrationBuilder.DropColumn(
                name: "OutstorToIn",
                table: "OutStorManager_OutStor");
        }
    }
}
