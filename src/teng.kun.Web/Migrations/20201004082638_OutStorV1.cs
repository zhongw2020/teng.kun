using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class OutStorV1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CusName",
                table: "OutStorManager_OutStor",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MatName",
                table: "OutStorManager_OutStor",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OutEmpName",
                table: "OutStorManager_OutStor",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SupName",
                table: "OutStorManager_OutStor",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CusName",
                table: "OutStorManager_OutStor");

            migrationBuilder.DropColumn(
                name: "MatName",
                table: "OutStorManager_OutStor");

            migrationBuilder.DropColumn(
                name: "OutEmpName",
                table: "OutStorManager_OutStor");

            migrationBuilder.DropColumn(
                name: "SupName",
                table: "OutStorManager_OutStor");
        }
    }
}
