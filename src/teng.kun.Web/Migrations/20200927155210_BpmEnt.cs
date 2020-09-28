using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class BpmEnt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Bpm_ExtraBp",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BpId = table.Column<string>(nullable: false),
                    BpTitle = table.Column<string>(nullable: false),
                    BpState = table.Column<string>(nullable: true),
                    BpSponsor = table.Column<string>(nullable: true),
                    PrevNode = table.Column<int>(nullable: false),
                    CurrNode = table.Column<int>(nullable: false),
                    NextNode = table.Column<int>(nullable: false),
                    Remark = table.Column<string>(nullable: true),
                    ExtraStartTime = table.Column<DateTime>(nullable: false),
                    ExtraEndTime = table.Column<DateTime>(nullable: false),
                    ExtraReason = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bpm_ExtraBp", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Bpm_LeaveBp",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BpId = table.Column<string>(nullable: false),
                    BpTitle = table.Column<string>(nullable: false),
                    BpState = table.Column<string>(nullable: true),
                    BpSponsor = table.Column<string>(nullable: true),
                    PrevNode = table.Column<int>(nullable: false),
                    CurrNode = table.Column<int>(nullable: false),
                    NextNode = table.Column<int>(nullable: false),
                    LeaveStartTime = table.Column<DateTime>(nullable: false),
                    LeaveEndTime = table.Column<DateTime>(nullable: false),
                    LeaveReason = table.Column<string>(nullable: true),
                    Remark = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bpm_LeaveBp", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Bpm_ExtraBp");

            migrationBuilder.DropTable(
                name: "Bpm_LeaveBp");
        }
    }
}
