using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace teng.kun.Web.Migrations
{
    public partial class _001 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ReportOutIn_ReportIn",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportOutIn_ReportIn", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReportOutIn_ReportOut",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    OutstorVoucher = table.Column<string>(nullable: true),
                    InstorVoucher = table.Column<string>(nullable: true),
                    MatName = table.Column<string>(nullable: true),
                    InstorPrice = table.Column<double>(nullable: false),
                    OutstorPrice = table.Column<double>(nullable: false),
                    OutstorNum = table.Column<double>(nullable: false),
                    RecoilNum = table.Column<double>(nullable: false),
                    CusName = table.Column<string>(nullable: true),
                    OutstorDate = table.Column<string>(nullable: true),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportOutIn_ReportOut", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReportOutIn_ReportStore",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreatedTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReportOutIn_ReportStore", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ReportOutIn_ReportIn");

            migrationBuilder.DropTable(
                name: "ReportOutIn_ReportOut");

            migrationBuilder.DropTable(
                name: "ReportOutIn_ReportStore");
        }
    }
}
