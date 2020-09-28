using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class InStorentchange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "InstorVerifyState",
                table: "InStorManager_InStor",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AddColumn<bool>(
                name: "SupCloseAccuntsFlag",
                table: "InStorManager_InStor",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SupCloseAccuntsFlag",
                table: "InStorManager_InStor");

            migrationBuilder.AlterColumn<bool>(
                name: "InstorVerifyState",
                table: "InStorManager_InStor",
                type: "bit",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
